'use server';

import { Person } from '../models/person'; // Adjust the import path as necessary

const PeoplePage = async () => {
  //apiURL has to be absolute URL, relative URL will not work in server components
  // Ensure this is set in your .env (not .env.local since it's a server component)
  //since this will be deployed on AWS Amplify, we need to set the environment variables in the AWS Amplify console
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/person";
  const bearerToken = process.env.NEXT_PUBLIC_API_BEARER_TOKEN || "dummy"; // Ensure this is set in your .env (not .env.local since it's a server component)

  // Fetch people data
  const response = await fetch(apiURL, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      //'Authorization': `Bearer ${bearerToken}`,
      'x-api-key':bearerToken,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch people');
    return <div>Failed to load data.</div>;
  }

  const people: Person[] = await response.json();

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">People</h1>
      <table className="table-auto w-full">
        <thead className="text-left">
          <tr>
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="p-2">{person.firstName}</td>
              <td className="p-2">{person.lastName}</td>
              <td className="p-2">{person.phone}</td>
              <td className="p-2">{person.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeoplePage;
