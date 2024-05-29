import React, { useCallback } from "react";
import { BeatLoader } from "react-spinners";
import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import {
  Page,
  Title,
  TextInput,
  PageHeader,
  PageContent,
  ParticleText,
  TableRepository,
  ModalRepository,
} from "@/components";
import { SEARCH_REPOSITORIES } from "@/graphql";
import { setRepositories, setSearch } from "@/redux";
import { ReduxRootState } from "@/types/redux/redux-root";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchRepositories, { loading }] = useLazyQuery(SEARCH_REPOSITORIES);

  const searchTerm = useSelector(({ search }: ReduxRootState) => search.value);
  const repositories = useSelector(
    ({ github }: ReduxRootState) => github.repositories
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      dispatch(setSearch(value));
    },
    [dispatch]
  );

  const handleSearch = useCallback(() => {
    if (!searchTerm.length) return;

    searchRepositories({
      variables: { searchTerm },
    }).then(({ data }) => {
      dispatch(setRepositories(data?.search?.nodes));
    });
  }, [dispatch, searchRepositories, searchTerm]);

  return (
    <Page>
      <PageHeader>
        <Title>
          Explore Repositórios no <ParticleText>GitHub</ParticleText>
        </Title>
        <TextInput
          value={searchTerm}
          title="Pesquise no GitHub"
          onChange={handleSearchChange}
          onSubmitEditing={handleSearch}
          placeholder="Escreva aqui o nome do repositório"
        />
      </PageHeader>
      {loading && <BeatLoader color="#fff842" margin={5} />}
      {!loading && repositories?.length > 0 && (
        <PageContent>
          <ModalRepository />
          <TableRepository />
        </PageContent>
      )}
    </Page>
  );
};

export default HomePage;
