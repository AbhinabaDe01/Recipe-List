import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'


import './Recipe.css'

export default function Recipe() {

    const { id } = useParams()

    // const url = 'http://localhost:3000/recipes/' + id
    // const {data: recipe , error, isPending} = useFetch(url)

    const { mode } = useTheme()

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)

        projectFirestore.collection('recipes').doc(id).get().then((doc) => {
            if(doc.exists){
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('Could not find the recipe')
            }
        })

    }, [id])

  return (
    <div className={`recipe ${mode}`}>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading..</p>}
        {recipe && (
            <>
                <h2 className='page-title'>{recipe.title}</h2>
                <p>Takes {recipe.cookingTime} mins to cook</p>
                <ul>
                    {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                </ul>
                <p>{recipe.method}</p>
            </>
        )}
    </div>
  )
}
