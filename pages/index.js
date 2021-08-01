export const getStaticProps = () => {
  return {
    props: {
      name: process.env.NEXT_PUBLIC_NAME
    }
  }
}


const Home = ({ name }) => {
  console.log(name)
  console.log(process.env.NEXT_PUBLIC_NAME)
  return (
    <div>
      sadi
    </div>
  );
}

export default Home;