import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const useRedirectIfConditionNotMet = (condition: boolean, targetRoute: string) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!condition) {
      navigate(targetRoute)
    }
  }, [condition, targetRoute, navigate])
}

export default useRedirectIfConditionNotMet
