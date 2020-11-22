import React from 'react';
import {
    Container,
    Title,
    Text,
} from './MessageStyle';

const Message = ({ variant, title, message }) => {
    return (
        <Container variant={variant}>
            {variant !== 'info' && <Title>{title}</Title>}
            <Text variant={variant}>{message}</Text>
        </Container>
    );
}

export default Message;