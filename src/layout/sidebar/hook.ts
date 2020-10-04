import Axios from "axios"
import useSWR from "swr"

interface BarContent {
  to: string;
  title: string;
  sub?: BarContent[];
}

export const useNavbarContent = () => {
  const { data, error } = useSWR<BarContent[]>(`/assets/data/navbar-content`, () => Axios.get("/assets/data/navbar-content.json").then(res => res.data));
  return {
    content: data,
    isLoading: !error && !data,
    isError: error
  }
}