import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { removeDev, saveDev } from '../../store/modules/devs/actions';
import { Display } from './styles';
import { ApplicationState } from '../../store';

interface IData {
  id: number;
  avatar_url: string;
  login: string;
  url: string;
}

interface IDataProps {
  data: IData[];
}

const ProfileDisplay: React.FC<IDataProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { devs } = useSelector((state: ApplicationState) => state.devReducer);

  const saved = useCallback(
    id => {
      return devs.some(dev => dev.id === id);
    },
    [devs],
  );

  const toggleButton = useCallback(
    item => {
      if (devs.every(dev => dev.id !== item.id)) {
        const devData = {
          id: item.id,
          avatar_url: item.avatar_url,
          login: item.login,
          url: item.url,
        };
        dispatch(saveDev(devData));
      } else {
        dispatch(removeDev(item.id));
      }
    },
    [dispatch, devs],
  );

  return (
    <Display>
      {data.length !== 0 ? (
        data.map(item => (
          <div key={item.id}>
            <img src={item.avatar_url} alt="login" />

            <div>
              <h3>{item.login}</h3>
            </div>

            <button type="button" onClick={() => toggleButton(item)}>
              {saved(item.id) ? <AiFillDelete color="#d62828" /> : <FaSave />}
            </button>

            <Link to={`/profile/${item.login}`}>
              Ver perfil
              <IoIosArrowDropright color="#000" />
            </Link>
          </div>
        ))
      ) : (
        <span>Ops...nenhum desenvolvedor salvo até o momento</span>
      )}
    </Display>
  );
};

export default ProfileDisplay;
