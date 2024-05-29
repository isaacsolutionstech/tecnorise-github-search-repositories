import React, { Fragment, useCallback, useMemo } from "react";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useDispatch, useSelector } from "react-redux";

import { openModal } from "@/redux";
import { ReduxRootState } from "@/types/redux/redux-root";
import {
  Link,
  Icon,
  Modal,
  Title,
  Avatar,
  SubTitle,
  ModalClose,
  AvatarInfo,
  AvatarImage,
  ChartContent,
  ModalContent,
  ModalOverlay,
  ChartContainer,
} from "@/components";
import { formatDate, formatDateAndTime } from "@/utils";

Chart.register(CategoryScale);

const ModalRepository: React.FC = () => {
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }: ReduxRootState) => modal);
  const repository = useSelector(
    ({ github }: ReduxRootState) => github.repository
  );

  const handleClose = useCallback(() => {
    dispatch(openModal(false));
  }, [dispatch]);

  const processCommitData = useMemo(() => {
    if (!repository) return;
    const history = repository?.defaultBranchRef?.target.history;

    const commits = history?.edges.map(
      ({ node }) => node.committedDate
    ) as string[];

    const commitDates = commits.map((date) =>
      formatDate(new Date(date).toISOString().split("T")[0])
    );

    const commitCountPerDay = commitDates.reduce((acc: any, date) => {
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(commitCountPerDay),
      datasets: [
        {
          stack: "Stack 0",
          label: "Commits por dia",
          data: Object.values(commitCountPerDay),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };
  }, [repository]);

  const processStatisticsData = useMemo(() => {
    if (!repository) return;

    const { issues, pullRequests, commitComments, forks } = repository;

    return {
      labels: ["Issues Abertas", "PRs Abertas", "Commits Comentados", "Forks"],
      datasets: [
        {
          label: "Total",
          stack: "Stack 0",
          data: [
            issues.totalCount,
            pullRequests.totalCount,
            commitComments.totalCount,
            forks.totalCount,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(60, 235, 54, 0.6)",
            "rgba(70, 99, 132, 0.6)",
          ],
        },
      ],
    };
  }, [repository]);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <Fragment>
      {modal.open && <ModalOverlay onClick={handleClose} />}
      <Modal open={modal.open}>
        <ModalClose>
          <Icon onClick={handleClose} className="far fa-times-circle" />
        </ModalClose>
        <ModalContent>
          <Avatar>
            <AvatarImage src={repository?.owner.avatarUrl} draggable={false} />
            <AvatarInfo>
              <Title>{repository?.name.toLocaleUpperCase()}</Title>
              <SubTitle>
                Proprietário: <strong>{repository?.owner?.login}</strong>
              </SubTitle>
              <SubTitle>
                Criado em:{" "}
                <strong>
                  {formatDateAndTime(String(repository?.createdAt))}
                </strong>
              </SubTitle>
              <SubTitle>
                Última atualização:{" "}
                <strong>
                  {formatDateAndTime(String(repository?.updatedAt))}
                </strong>
              </SubTitle>
              <SubTitle>
                Principal tecnologia: <strong>{repository?.primaryLanguage?.name}</strong>
              </SubTitle>
              <Link target="_blank" rel="noreferrer" href={repository?.url}>
                Visualizar
              </Link>
            </AvatarInfo>
          </Avatar>
          <ChartContainer>
            {processCommitData && (
              <ChartContent>
                <Title>Commits por Dia</Title>
                <Bar data={processCommitData} options={options} />
              </ChartContent>
            )}
            {processStatisticsData && (
              <ChartContent>
                <Title>Estatísticas</Title>
                <Bar data={processStatisticsData} options={options} />
              </ChartContent>
            )}
          </ChartContainer>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default ModalRepository;
