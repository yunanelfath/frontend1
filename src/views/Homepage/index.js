import React, { useState } from 'react';
import {
  apiGetHomepage
} from 'api/homepage.api'
import HomepageCard from 'components/HomepageCard'
import InfiniteScroll from 'react-infinite-scroller'
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames'

const Homepage = (props) => {
  const [isLoading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const [hasMore, setMore] = useState(true)
  const [page, setPage] = useState(1)

  const fetchHomepage = async () =>{
      setLoading(true)
      await apiGetHomepage({
        page: page
      }).then((e)=>{
        const {
          response
        } = e

        let updateItems = items.concat(response.result)
        setLoading(false)

        setItems(updateItems)
        setPage(page+1)
        if(response.result.length === 0){
          setMore(false)
        }

      })
    }
    return (
      <>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '55px',
        overflow: 'hidden'
      }}>
        <InfiniteScroll
          pageStart={0}
          threshold={300}
          loadMore={fetchHomepage}
          hasMore={hasMore}
          style={{textAlign: 'center'}}
          loader={<div className={classNames({
            "loading": true,
            "hide": isLoading ? false : true,
          })} key={0}>
            <CircularProgress />
          </div>}
        >
        {items && items.length > 0 && items.map((tile, idx) => {
          let updateTile = {
            ...tile,
            img: tile.media.m,
          }
          return (
            <HomepageCard tile={updateTile} key={idx}/>
          )
        })}
        </InfiniteScroll>
      </div>
      </>
    );
  // }
}
export default Homepage
