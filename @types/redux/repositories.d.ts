import { RepositoryType, RepositoryDetailGraphqlType } from "@/types/graphql/repository";

export interface RepositoriesState {
  repositories: RepositoryType[];
  repository: RepositoryDetailGraphqlType | null;
}
