import React, { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles';

import { FaRocket, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import Image from '../../components/Image';
import { 
  Container, 
  SubmitButton,
  FormContainer,
  Form
} from './styles';

toast.configure()
function Main() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await api.get(`/search?q=${keyword}&media_type=image&year_end=1999`);
      if (res.data.collection.items.length > 0) {
        setData(res.data.collection.items);
      } else {
        toast.error('Something went wrong! Try a new keyword')
      } 
      setLoading(false);
    } catch(error) {
      console.log(error);
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
              <FaRocket color="#fff" size={14} />
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
