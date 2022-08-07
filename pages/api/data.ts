// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const Data = {
  projects:{
    project01:{
      title:"",
      paragraph:"",
      link:""
    }
  },
  blogs:{
    blog01:{

    }
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Data);
}
