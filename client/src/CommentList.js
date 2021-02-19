import React, { useState, useEffect } from 'react';

export default ({ comments }) => { 
    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = `Comment is awaiting moderation (id: ${comment.id})`;
        }

        if (comment.status === 'rejected') {
            content = `Comment is rejected (id: ${comment.id})`;
        }

        return <li key={comment.id}>{content}</li>;
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    );
};