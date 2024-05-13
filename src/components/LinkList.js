import React from 'react';
import Link from './Link';

import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  query {
    links {
        id
        url
        description
    
        postedBy {
          username
        }
        votes {
          id
        }
    }
  }
`;

const LinkList = () => {

  const { data } = useQuery(FEED_QUERY);

  return (
    <div>

    { data && (
        <>
          {data.links.map((link, index) => (
            <Link key={link.id} link={link} index={index}/>
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
