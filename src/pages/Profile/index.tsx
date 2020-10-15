import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSave } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { saveDev } from '../../store/modules/devs/actions';
import { ApplicationState } from '../../store';
import ReposDisplay from '../../components/ReposDisplay';
import Loading from '../../components/Loading';

import { Container } from './styles';

interface ParamsType {
  login: string;
}

interface IData {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  url: string;
}

interface IRepo {
  id: number;
  full_name: string;
  description: string;
  svn_url: string;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [repos, setRepos] = useState<IRepo[]>([]);

  const { login } = useParams<ParamsType>();
  const dispatch = useDispatch();
  const { devs } = useSelector((state: ApplicationState) => state.devReducer);

  useEffect(() => {
    async function loadData(): Promise<void> {
      try {
        const [userLogin, userRepos] = await Promise.all([
          api.get(`/users/${login}`),
          api.get(`/users/${login}/repos`),
        ]);
        setData(userLogin.data);
        setRepos(userRepos.data);
      } catch (err) {
        toast(
          'Ops, houve algum erro na requisição. Tente novamente mais tarde',
        );
      }
    }

    loadData();
  }, [login]);

  const handleSaveDev = useCallback(() => {
    const saveData = {
      id: data.id,
      avatar_url: data.avatar_url,
      login: data.login,
      url: data.url,
    };

    if (devs.every(dev => dev.id !== saveData.id)) {
      dispatch(saveDev(saveData));
    }
  }, [dispatch, data, devs]);

  const saved = useCallback(
    id => {
      return devs.every(dev => dev.id !== id);
    },
    [devs],
  );

  return (
    <>
      {Object.keys(data).length !== 0 ? (
        <Container>
          <section>
            <img src={data.avatar_url} alt={data.name} />

            <div>
              <h3>
                {data.name} / {data.login}
              </h3>

              <ul>
                <li>
                  <strong>{data.public_repos}</strong>
                  <span>Repositórios</span>
                </li>

                <li>
                  <strong>{data.followers}</strong>
                  <span>Seguidores</span>
                </li>

                <li>
                  <strong>{data.following}</strong>
                  <span>Seguindo</span>
                </li>

                {saved(data.id) && (
                  <li>
                    <button onClick={handleSaveDev} type="button">
                      <strong>
                        <FaSave />
                      </strong>
                      <span>Salvar Perfil</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </section>

          {repos.length !== 0 && <ReposDisplay repos={repos} />}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Profile;
