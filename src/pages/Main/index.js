import React, { useState } from 'react';

import { FaSearch, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import Image from '../../components/Image';
import { 
  Container, 
  SubmitButton,
  FormContainer,
  Form
} from './styles';

function Main() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await api.get(`/search?q=${keyword}&media_type=image&year_end=1999`);
      //console.log(res.data.collection.items);
      setData(res.data.collection.items);
      setLoading(false);
    } catch(error) {
      console.log('tá');
    }
  }

  function handleInputChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={keyword}
            onChange={handleInputChange}
            placeholder="Ex: supernova, sun, armstrong"
          />
          <SubmitButton type="submit" loading={loading} >
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaSearch color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
      </FormContainer>

      <ul>
        {data.map(content => <Image key={content.data[0].nasa_id} content={content} />)}
      </ul>
    </Container>
  );
}

export default Main;
