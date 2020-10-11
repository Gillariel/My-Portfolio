import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react'

/**
 * @param variable /!\ if not custom condition, it use simple !!var => could lead to weird behavior with nullable boolean or number
 * @param ComponentBuilder Can only use the variable specify in `variable` props, else safety is not guaranteed
 */
interface IConditionalLoaderProps {
  variable: any;
  ComponentBuilder: (variable: any) => any;
  customCondition?: (variable: any) => boolean;
}

const ConditionalLoader = ({
  variable,
  ComponentBuilder,
  customCondition
}: IConditionalLoaderProps) => {
  const [ok, setOk] = React.useState(false);
  
  React.useEffect(() => {
    if(customCondition)
      setOk(customCondition(variable))
    else setOk(!!variable)
  }, [!!variable]);

  return (
    ok
      ? ComponentBuilder(variable)
      : <div style={{ backgroundColor: "lightgrey", height: "100%", width: "100%" }}>
          <Typography>Loading and converting your data, please wait...</Typography>
          <CircularProgress />
        </div>   
  )
}

export default ConditionalLoader
