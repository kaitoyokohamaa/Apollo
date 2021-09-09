import type { NextPage } from "next";
import { useQuery, gql, NetworkStatus, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

const GET_DOC_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const [getDog, { loading, error, data, networkStatus }] = useLazyQuery(
    GET_DOC_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
    }
  );
  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      {data?.dog && (
        <img
          src={data.dog.displayImage}
          style={{ height: 100, width: 100 }}
        ></img>
      )}
      <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
        useLazyQuery!
      </button>
    </div>
  );
}

const Dog = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <>
      {/* <DogPhoto /> */}
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    </>
  );
};
export default function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const onDogSelected = ({ target }) => {
    setSelectedDog(target.value);
  };

  return (
    <div>
      <h2>Building Query components 🚀</h2>
      {selectedDog && <DogPhoto breed={selectedDog} />}
      <Dog onDogSelected={onDogSelected} />
    </div>
  );
}
