interface HomeProps {
  poolConsult: number
}

export default function Home(props: HomeProps) {
  return (
    <h1>Quantidade de bolões: {props.poolConsult}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data)

  return {
    props: {
      poolConsult: data.poolConsult,
    }
  }
}
