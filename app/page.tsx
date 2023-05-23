import Layout from "@/components/layout/layout";
import Novels from "@/components/Novels";
import { Providers } from "@/components/Providers";

export default function Home() {
  return (
    <main>
      <Providers>
        <Layout home={true}>
        <Novels />
        </Layout>
      </Providers>
    </main>
  );
}
