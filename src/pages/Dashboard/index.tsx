import React, { useCallback, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { searchFormat } from '../../utils/format';
import ProfileDisplay from '../../components/ProfileDisplay';
import ReposDisplay from '../../components/ReposDisplay';
import { Container } from './styles';

interface IProfile {
  id: number;
  avatar_url: string;
  login: string;
  url: string;
}

interface IRepos {
  id: number;
  full_name: string;
  description: string;
  svn_url: string;
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState<'dev' | 'repo' | 'Escolha uma opção'>(
    'Escolha uma opção',
  );
  const [data, setData] = useState<IProfile[]>([]);
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [searchError, setSearchError] = useState('');
  const [typeError, setTypeError] = useState('');

  const handleSearch = useCallback(event => {
    setSearchError('');
    setSearch(event.target.value);
  }, []);

  const handleSelect = useCallback(event => {
    setTypeError('');
    setType(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const formattedSearch = searchFormat(search);

      try {
        if (!search) {
          setSearchError('Campo obrigatório');
        }

        if (type === 'dev') {
          const response = await api.get(`/search/users?q=${formattedSearch}`);

          setRepos([]);
          setData(response.data.items);
        } else if (type === 'repo') {
          const response = await api.get(
            `/search/repositories?q=${formattedSearch}`,
          );

          setData([]);
          setRepos(response.data.items);
        } else {
          setTypeError('Escolha uma opção');
        }
      } catch (err) {
        toast(
          'Ops, houve algum erro na requisição. Tente novamente mais tarde',
        );
      }

      setSearch('');
    },
    [search, type],
  );

  return (
    <Container
      searchError={!!searchError}
      typeError={!!typeError}
      position={data.length !== 0 || repos.length !== 0}
    >
      <h2>Buscar por desenvolvedor ou repositório</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">
            <IoMdSearch size={20} />
            <input
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Digite o nome de exibição do desenvolvedor ou repositório"
            />
          </label>
          {searchError && <span>{searchError}</span>}
        </div>

        <div>
          <label htmlFor="type">
            <select
              name="type"
              id="type"
              value={type}
              onChange={handleSelect}
              required
            >
              <option disabled hidden>
                Escolha uma opção
              </option>
              <option value="dev">Desenvolvedor</option>
              <option value="repo">Repositório</option>
            </select>
          </label>
          {typeError && <span>{typeError}</span>}
        </div>

        <button type="submit">Buscar</button>
      </form>
      {data.length !== 0 && <ProfileDisplay data={data} />}

      {repos.length !== 0 && <ReposDisplay repos={repos} />}
    </Container>
  );
};

export default Dashboard;
