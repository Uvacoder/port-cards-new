import { graphql } from "@octokit/graphql";
import type { GraphQlResponse } from "@octokit/graphql/types";
import { type Repository } from "@/lib/repoTypes";
import RepoCardNode from "@/components/custom_nodes/RepoCardNode";
import Dagre from "@dagrejs/dagre";

export const nodeTypes = {
  repoCardNode: RepoCardNode,
};

type rankdirType = {
  direction: "TB" | "BT" | "LR" | "RL";
};

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getLayoutedElements = (
  nodes: any,
  edges: any,
  options: rankdirType
) => {
  g.setGraph({ rankdir: options.direction });

  edges.forEach((edge: any ) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node: any) => g.setNode(node.id, node));

  Dagre.layout(g);

  return {
    nodes: nodes.map((node: any) => {
      const { x, y } = g.node(node.id);

      return { ...node, position: { x, y } };
    }),
    edges: edges,
  };
};

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: "bearer " + import.meta.env.PUBLIC_GITHUB_API_KEY,
  },
});

// get gitub profile
export async function getProfile() {
  const { user } = await graphqlWithAuth<GraphQlResponse<any>>(`
        query{
            user(login: "vinceflores"){
                avatarUrl, name, 
            }
        }
    `);
  return user;
}

// get repos
export async function fetchRepos() {
  const { user } = await graphqlWithAuth<GraphQlResponse<any>>(
    `
        query {
          user(login:  "vinceflores"){
            repositories(first: 15, isFork: false, visibility: PUBLIC, orderBy: {
                direction:  DESC, 
                field: UPDATED_AT
            }){
                totalCount,
                pageInfo{
                  hasNextPage,
                  hasPreviousPage, 
                  startCursor, 
                  endCursor
               }, 
                nodes{
                    description,
                    homepageUrl,
                    url, 
                    name,
                    languages(first: 10 , orderBy: {
                        direction: DESC, 
                        field: SIZE
                    }){
                        nodes{
                            name, color 
                        }
                    }
                    # end of languages 
                    repositoryTopics(first: 20){
                        nodes{
                            topic{
                                name 
                            }
                        }
                    }
                }
            }
        }
      
      } 
        `
  );

  const result: Repository[] = user?.repositories?.nodes.map((node: any) => {
    const { languages, repositoryTopics } = node;
    return {
      ...node,
      languages: languages.nodes,
      repositoryTopics: repositoryTopics.nodes.map(
        (topic: { topic: { name: string } }) => ({ topic: topic.topic.name })
      ),
    };
  });
  return result;
}
