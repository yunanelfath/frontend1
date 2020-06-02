import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default (props) => {
  const {
    tile
  } = props

  return (
    <GridListTile key={tile.img}>
      <a href={`${tile.link}`} target="_blank" rel="noopener noreferrer">
      <img src={tile.img} alt={tile.title} />
      <GridListTileBar
        title={`${tile.tags} ${tile.author} `}
      />
      </a>
    </GridListTile>
  )
}
