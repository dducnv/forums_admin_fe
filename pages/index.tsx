import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import StatBox from '../components/page_components/StatBox'
import { UsersIcon, PencilSquareIcon, TagIcon } from '@heroicons/react/24/solid'
import { dashboardApi } from '@/api-client/doasboard-api'
import {
  LineChart,
  StackedBarChart,
  VerticalBarChart,
} from '@/components/page_components/charts'
import _ from 'lodash'
const Dashboard = () => {
  const [totalCount, setTotalCount] = useState<any>({})
  const [tagsChart, setTagsChart] = useState<any>({
    labels: [],
    datasets: [],
  })
  const [userChart, setUserChar] = useState<any>({
    labels: [],
    datasets: [],
  })
  const [postsChart, setPostsChar] = useState<any>({
    labels: [],
    datasets: [],
  })
  useEffect(() => {
    fetchDataTagsPopular()
    fetchDataCountTotal()
    fetchDataUserTop()
    fetchDataPostsPopular()
  }, [])
  const fetchDataUserTop = async () =>{
    await dashboardApi.topUser().then((res)=>{
      setUserChar({
        labels:_.map(res,(item)=>item?.name),
        datasets:[
          {
            label: 'Điểm',
            data: _.map(res,(item)=>item?.reputation),
            borderColor: 'rgb(69, 209, 83)',
            backgroundColor: 'rgba(69, 209, 83, 0.5)',
          },
          {
            label: 'Số post đăng tải',
            data: _.map(res,(item)=>item?.post_count),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Tổng số lượt đóng góp ý kiến',
            data: _.map(res,(item)=>item?.comment_count),
            borderColor: 'rgb(174, 69, 209)',
            backgroundColor: 'rgba(174, 69, 209, 0.5)',
          },
        ]
      })
    })
  }
  const fetchDataTagsPopular = async () => {
    await dashboardApi.topTags().then((res) => {
      setTagsChart({
        labels: _.map(res, (item) => item?.name),
        datasets: [
          {
            label: 'Tổng bài đăng',
            data: _.map(res, (item) => item?.posts_use),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Lượt theo dõi',
            data: _.map(res, (item) => item?.tag_follow_count),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      })
    })
  }
  const fetchDataPostsPopular = async () =>{
    await dashboardApi.topPosts().then((res)=>{
      setPostsChar({
        labels: _.map(res,(item)=>item?.title),
        datasets:[
          {
            label: 'Tổng lượt vote',
            data: _.map(res,(item)=>item?.voteCount),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Tổng số bình luận',
            data: _.map(res,(item)=>item?.commentCount),
            borderColor: 'rgb(209, 69, 69)',
            backgroundColor: 'rgba(209, 69, 69, 0.5)',
          },
          {
            label: 'Tổng số bookmark',
            data: _.map(res,(item)=>item?.bookmarkCount),
            borderColor: 'rgb(69, 209, 83)',
            backgroundColor: 'rgba(69, 209, 83, 0.5)',
          },
        ]
      })
    })
  }
  const fetchDataCountTotal = async () => {
    await dashboardApi.countTotal().then((res: any) => {
      setTotalCount(res)
    })
  }

  return (
    <>
      <h2>DASHBOARD</h2>
      <div className='flex mb-3'>
        <div className='md:w-1/3 md:mr-2'>
          <StatBox
            title='Tổng số người dùng'
            data_count={totalCount?.user_count}
            icon={<UsersIcon className='h-7 w-7' />}
          />
        </div>
        <div className='md:w-1/3'>
          <StatBox
            title='Tổng số bài viết'
            data_count={totalCount?.post_count}
            icon={<PencilSquareIcon className='h-7 w-7' />}
          />
        </div>
        <div className='md:w-1/3 md:ml-2'>
          <StatBox
            title='Tổng số tags'
            data_count={totalCount?.tag_count}
            icon={<TagIcon className='h-7 w-7' />}
          />
        </div>
      </div>
      <div className='flex'>
        <div className='md:w-1/2 md:mr-1'>
          <div className='bg-white shadow-md w-full text-center pt-2'>
            <h2 className='mb-2 text-lg'>Người dùng nổi bật</h2>
            <LineChart title='Người dùng nổi bật' data={userChart} />
          </div>
        </div>
        <div className='md:w-1/2 md:ml-1'>
          <div className='bg-white shadow-md w-full text-center pt-2'>
          <h2 className='mb-2 text-lg'>Tag Nổi bật</h2>
            <VerticalBarChart data={tagsChart} />
          </div>
        </div>
      </div>
      <div className='w-full bg-white mt-3 p-4 shadow-md pt-2 text-center'>
      <h2 className='mb-2 text-lg'>Bài viết nổi bật</h2>
      <StackedBarChart data={postsChart}/>
      </div>
    </>
  )
}

export default Dashboard
