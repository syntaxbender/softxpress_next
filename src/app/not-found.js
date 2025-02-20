"use client"
import React from 'react'
import BreadCrumb from '@/app/components/breadCrumb/breadCrumb';
import { notFound } from './navigation';

export const NoMatch = () => {
  const route = ["not-found"];
  return (
    <>
      <section>
        <BreadCrumb route={route} nav={notFound} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="errorInner">
                <h1>404</h1>
                <p className="headerBottom">Aradığınız sayfa bulunamadı!</p>
                <p>Anasayfaya dönebilir, istediğiniz sayfaya üst menü vasıtasıyla erişebilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .errorInner{
          margin-bottom:120px;
        }
        .errorInner h1 {
          color: var(--bright-orange);
          font-size: 150px;
          font-weight: 900;
          text-align: center;
          margin: 80px 0px 0px 0px;
          text-shadow: 3px 5px 2px #3333;
        }
        .errorInner p{
          text-align: center;
        }
        .errorInner .headerBottom {
          color: var(--main-dark-blue);
          font-size: 30px;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}

export default NoMatch

