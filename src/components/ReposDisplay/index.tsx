import React, { useCallback } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IoIosArrowDropright } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { saveRepo, removeRepo } from '../../store/modules/repos/actions';
import { Repositories, Span } from './styles';

interface IRepos {
  id: number;
  full_name: string;
  description: string;
  svn_url: string;
}

interface IReposProps {
  repos: IRepos[];
}

const ReposDisplay: React.FC<IReposProps> = ({ repos }) => {
  const dispatch = useDispatch();
  const { repos: repositories } = useSelector(
    (state: ApplicationState) => state.repoReducer,
  );

  const toggleRepoStar = useCallback(
    repo => {
      if (repositories.every(repository => repository.id !== repo.id)) {
        dispatch(saveRepo(repo));
      } else {
        dispatch(removeRepo(repo.id));
      }
    },
    [dispatch, repositories],
  );

  const favorite = useCallback(
    (id: number): boolean => {
      return repositories.some(repository => repository.id === id);
    },
    [repositories],
  );

  return (
    <>
      {repos.length !== 0 ? (
        repos.map(repo => (
          <Repositories key={repo.id}>
            <div>
              <div>
                <h3>{repo.full_name}</h3>
                <button type="button" onClick={() => toggleRepoStar(repo)}>
                  {favorite(repo.id) ? (
                    <AiFillStar color="#DAA520" />
                  ) : (
                    <AiOutlineStar />
                  )}
                </button>
              </div>
              <h4>{repo.description}</h4>
            </div>

            <a href={repo.svn_url} rel="noopener noreferrer" target="_blank">
              Ver detalhes
              <IoIosArrowDropright color="#000" />
            </a>
          </Repositories>
        ))
      ) : (
        <Span>Ops...nenhum repositório salvo até o momento</Span>
      )}
    </>
  );
};

export default ReposDisplay;
