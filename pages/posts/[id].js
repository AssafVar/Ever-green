import Layout from "../../components/layout/layout";
import React from "react";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from "../../components/date/date";
import utilStyles from '../../styles/utils.module.css';
import Head from "next/head";


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


export default function Post({ postData }) {
    return (
      <Layout home={false}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}