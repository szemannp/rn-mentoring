import { useSelector } from "react-redux"
import { Text } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";


const MovieList = () => {
  const [data, setData] = useState([])
  const screenState = useSelector(state => state.movieList)

  useEffect(() => {
    dummyData()
  }, [])

  const dummyData = async () => {
    const list = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
    console.log("DATA", list.data.results)
    setData(list.data.results)
  }


  return (
    <>
      {screenState.loading && <Text>{'Loading'}</Text>}
      {screenState.error && <Text>{'Error'}</Text>}
      {!screenState.loading && !screenState.error && data.length && (
        <Text>{data[1].name}</Text>
      )}
    </>
  )
}

export default MovieList;
