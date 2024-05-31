export interface Repository {
  description: string;
  homepageUrl: string;
  url: string;
  name: string;
  languages: languages[];
  repositoryTopics: repositoryTopics[];
}

export type languages = {
  name: string;
  color: string;
};

export type repositoryTopics = {
  topic: string;
};

export type ProfileType = {
  avatarUrl: string;
  name: string;
}
