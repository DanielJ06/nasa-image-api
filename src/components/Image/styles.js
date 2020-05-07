import styled from 'styled-components';

export const Container = styled.div`
    background-color: #343746;
    box-shadow: 0 0 14px 0 rgba(3, 5, 2, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 35px;
    text-align: center;
    padding: 30px;
    border-radius: 5px;
    transform-style: preserve-3d;
    transition: all .8s;

    :active {
        box-shadow: 0 0 14px 0 rgba(99, 99, 99, 0.1);
        transform: rotateY(180deg);
    }

    .front {
        backface-visibility: hidden;
    }

    .verse {
        position: absolute;
        padding: 20px;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        justify-content: center;
        align-items: center;

        p {
            color: #fff;
            font-weight: bold;
        }
    }

    img {
        box-shadow: 0 0 14px 0 rgba(1, 1, 1, 0.08);
        height: 300px;
        width: 450px;
        object-fit: cover;
        border-radius: 5px;
    }

    h3 {
        color: #c4c4c4;
        font-weight: bold;
        margin-top: 12px;
    }
`;
