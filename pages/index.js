export const getStaticProps = () => {
  return {
    props: {
      name: process.env.NAME
    }
  }
}


const Home = ({ name }) => {
  console.log(name)
  return (
    <div>
      sadi
    </div>
  );
}

export default Home;