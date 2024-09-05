import Banner from '@/components/project/Banner'
import { getPosts } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Lay du lieu tu API
const getData = async () => {
  const res = await fetch('https://deploy-next-mongo.vercel.app/api/blog', { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Databse Error!")
  }
  return res.json();
}


const Home = async () => {

  // Lay du lieu truc tiep tu mongodb
  // const posts = await getPosts();

  const posts = await getData();
  // console.log(posts);



  return (
    <>
      <Banner />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {(posts.length > 0) && posts.map((value) => {
              console.log(value);
              return (
                <div className="col mb-5" key={value.id}>
                  <div className="card h-100">
                    {/* Product image*/}
                    <Link href={`/blog/${value.id}`}>
                      <Image
                        alt='image - 1'
                        priority
                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                        width={400}
                        height={400}
                      />
                    </Link>
                    {/* Product details*/}
                    <div className="card-body p-4">
                      <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">{value.title}</h5>
                        {/* Product price*/}
                        $40.00 - $80.00
                      </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          View options
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
        </div>
      </section>

    </>

  )
}

export default Home




// setup .env vercel - server
// http://localhost:3000 -> Dung ten mien deploy