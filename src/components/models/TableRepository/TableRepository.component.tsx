import React, { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  TableTd,
  TableTh,
  TableTr,
  TableBody,
  TableHead,
} from "@/components";
import { REPOSITORY_DETAIL } from "@/graphql";
import { openModal, setRepositoryDetail } from "@/redux";
import { ReduxRootState } from "@/types/redux/redux-root";
import { RepositoryGraphqlOwnerType } from "@/types/graphql/repository";

const TableRepository: React.FC = () => {
  const dispatch = useDispatch();
  const [repositoryDetail] = useLazyQuery(REPOSITORY_DETAIL);

  const repositories = useSelector(
    ({ github }: ReduxRootState) => github.repositories
  );

  const handleShowInfo = useCallback(
    (owner: RepositoryGraphqlOwnerType, repositoryName: string) => {
      repositoryDetail({
        variables: { repositoryName, repositoryOwner: owner.login },
      }).then(({ data }) => {
        if (data?.repository) {
          dispatch(openModal(true));
          dispatch(
            setRepositoryDetail({
              ...data?.repository,
              owner,
              name: repositoryName,
            })
          );
        }
      });
    },
    [dispatch, repositoryDetail]
  );

  if (repositories && !repositories.length) {
    return null;
  }

  return (
    <Table>
      <TableHead>
        <TableTr>
          <TableTh>
            <h1>Repositório</h1>
          </TableTh>
          <TableTh>
            <h1>Proprietário</h1>
          </TableTh>
          <TableTh>
            <h1>Tecnologia</h1>
          </TableTh>
          <TableTh>
            <h1>Descrição</h1>
          </TableTh>
        </TableTr>
      </TableHead>
      <TableBody>
        {repositories?.map((repo, index) => (
          <TableTr
            key={`${repo?.name}-${index}`}
            onClick={() => handleShowInfo(repo?.owner, repo?.name)}
          >
            <TableTd>{repo?.name}</TableTd>
            <TableTd>{repo?.owner?.login}</TableTd>
            <TableTd>{repo?.primaryLanguage?.name}</TableTd>
            <TableTd>{repo?.description}</TableTd>
          </TableTr>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableRepository;
