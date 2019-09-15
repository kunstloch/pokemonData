import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const profileQuery = gql`
  {
    pokemon(name: "Charizard") {
      id
      number
      name
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

function Pokeindex() {
  const { loading, error, data } = useQuery(profileQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <br />
      <div>Dein Pokemon: {data.pokemon.name}</div>
      <br />
      <img width="200" src={data.pokemon.image} />
      <br />
      <div>
        <br />
        Special-Attacke:
        {data.pokemon.attacks.special.map(special => (
          <div>
            <div>
              <br />
              {special.name}{' '}
            </div>
            Damage: {special.damage}
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default Pokeindex;
