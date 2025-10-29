
import { Typography , Container, Stack, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
const Language = [
    {
        name : 'Japanese',
        code : 'ja'
    },
    {
        name : 'Hindi',
        code : 'hi'
    },
    {
        name : 'Spanish',
        code : 'es'
    },
    {
        name : 'French',
        code : 'fr'
    }
]

const Home = () => {
    const navigate = useNavigate()

    const languageSelectHandler = (lang:string):void=>{
       navigate(`/learn?language=${lang}`)
    }

  return (
   <Container maxWidth="sm">
    <Typography variant="h4"  p={'2rem'} textAlign={'center'}>
        Welcome, Begin Your Jounery to Learn Languages with LearnGo!
    </Typography>
    <Stack direction={'row'} spacing={'2rem'} p={'2rem'} alignItems={'center'} justifyContent={'center'}> 
      {
        Language.map((lang) => (
            <Button sx={{backgroundColor : "blue" , color: 'white' , fontSize : '600'}} onClick={() => {
                languageSelectHandler(lang.code)
            }} key={lang.code}>{lang.name}</Button>
        ))
      }
    </Stack>
         <Typography textAlign={'center'}>
         Choose a language to start learning and take quizzes to test your knowledge.
      </Typography>
   </Container>
  )
}

export default Home