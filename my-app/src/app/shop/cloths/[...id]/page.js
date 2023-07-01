const Page = ({ params }) => {
  console.log(params);

  return <div>Cloths - {params.id}</div>;
};

export default Page;
