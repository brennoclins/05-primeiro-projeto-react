import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>;
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Click</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/8685099?s=460&u=d4fc89c9ffc0329c230c2a9bd3cdb2ccf29a9b22&v=4"
            alt="Brenno C. Lins"
          />
          <div>
            <strong>brennoclins/apiF1</strong>
            <p>Praticando conhecimentos sobre NodeJS aprendidos no módulo-01 do GoStack13 com a Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/8685099?s=460&u=d4fc89c9ffc0329c230c2a9bd3cdb2ccf29a9b22&v=4"
            alt="Brenno C. Lins"
          />
          <div>
            <strong>brennoclins/apiF1</strong>
            <p>Praticando conhecimentos sobre NodeJS aprendidos no módulo-01 do GoStack13 com a Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/8685099?s=460&u=d4fc89c9ffc0329c230c2a9bd3cdb2ccf29a9b22&v=4"
            alt="Brenno C. Lins"
          />
          <div>
            <strong>brennoclins/apiF1</strong>
            <p>Praticando conhecimentos sobre NodeJS aprendidos no módulo-01 do GoStack13 com a Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
