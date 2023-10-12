import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Aile",
    image: "https://avatars.mds.yandex.net/i?id=f11b4062eeb94147ef364d4262a21930f9fefa6d-5541872-images-thumbs&n=13"
  },
  {
    title: "Aksiyon",
    image: "https://avatars.mds.yandex.net/i?id=d73f7adb1a2ffb3d4484a9e268abba4f34ebb692-9708671-images-thumbs&n=13"
  },
  {
    title: "Animasyon",
    image: "https://avatars.mds.yandex.net/i?id=4f7d33faba5646b061db3f534866e4695eae3b22-10876270-images-thumbs&n=13"
  },
  {
    title: "Belgesel",
    image: "https://avatars.mds.yandex.net/i?id=649fc091426792088bc824196e718f711322f2e1-10811924-images-thumbs&n=13"
  },
  {
    title: "Bilim Kurgu",
    image: "https://avatars.mds.yandex.net/i?id=0a5a53834fd8037dd75e317bff3c26f0e5096f7b-10108140-images-thumbs&n=13"
  },
  {
    title: "Biyografi",
    image: "https://avatars.mds.yandex.net/i?id=27834e10a92b74a459e5a9141e853822c7e287c8-2769791-images-thumbs&n=13"
  },
  {
    title: "Dram",
    image: "https://avatars.mds.yandex.net/i?id=2cf6db9f5d36f71e9d4fd913358ba1a21ae1d232-7755608-images-thumbs&n=13"
  },
  {
    title: "Fantastik",
    image: "https://avatars.mds.yandex.net/i?id=a7c4b9a26ee9f1f046e854b32c9a8db0-4245921-images-thumbs&n=13"
  },
  {
    title: "Gerilim",
    image: "https://yandex-images.clstorage.net/4i7tK2A81/02a8bauVAP/-WzDqeYpP1xHGlI4-QsjVW2t0CdmzQv26E7o1LvPIabfX6-24EhMS6r_9QBkgwzLSK6cMqIOjquSIyC3bqBODb5v1uWtaCMHFl9FbPEIJldw8JM2epcPq_IMtNupwXir1wrAiJM-OyDdlI8hGPQRnRSrwX2-VNP0qB0yxhP_CxroS_Sd5T1QW3IHHhf3JDN7RMzyG2ilMaHbQYfnj5tA3aBr7ZSHNxsM2aG0ECXfOZ0igshr3VvP7I0vSvI1_iwJ20jahOIyc1xBJhM17R8dZ3_C2QBmmjq_xHiG45Ode_uNV-eBgzEpMMqFsS801CqKIpjQYuVgxO6PAXHmO_QsGNVK77jTIn1cSSIuDegCKmVTzuQhapsVkdlhhvm1qlHbsG_wvp0xCArIn64zN_k8jQ2KxmHhRvfBoTNw8Sv-HQX3aNOh7TdSa20nHSr-Nx5bbfHGB3-qFb3YfYHFs71y-59p9LWGKR0W8K-kIBDWPrU2iutLymDM7aIvc-0o1A49-nTFuuILRGJpBB8owjUKVFDr-BJmigGlx1uxxLW9ZfqhWvq-ug4aEdyFnwcE2A6UIIXpbflSz_6vNlTfMN0OK-tC2Iz_NF9ISS8-GfMsDXRhx_cod4kJkOJugPibmFvsg0zJm5Q5FRnfs44TJOINnzaEwG7FZd_emyhZ7CL9OCLJWsGK-BRwQGIuLjXVJgJiT-TGK1uTAaH0W7n6i4BV84Rv-pO0CR0x8IGNDyf1II8untF8-lD66ZgYXNQr8xAe6GTvru04e1BQOD0P_Q4sfkTB7S9wiAyq-Huy5IuLb9yneNiFigU3PtaVsis52xifMKfqUNRb99WAKmL1K889KON55ozzCWd9Whs_JfwqMl1a9soKca4RptZSuvK0jU7Ml2j-u54SEzznpJA-Pv4MqBGl_V_DVM30vhp5wD3yGCLpddWZ3jlXYXAeLxHWNRJ0YdvOK0KnEJ_vWazDtoM"
  },
  {
    title: "Gizem",
    image: "https://yandex-images.clstorage.net/4i7tK2A81/02a8bauVAP/-WzDqeYpP1xHGlI4-QsjVW2t0CdmzQv26E7ohe6bJ6WFWvzu4k0aHfD3oFIz3gzMHPuWYPIE3q_Pdiq_PKdHWeo4guWhaCcGElxIbPEIJldw8JM2epcPq_IMtNupwXir1wrAiJM-OyDdlI8hGPQRnRSrwX2-VNP0qB0yxhP_CxroS_Sd5T1QW3IHHhf3JDN7RMzyG2ilMaHbQYfnj5tA3aBr7ZSHNxsM2aG0ECXfOZ0igshr3VvP7I0vSvI1_iwJ20jahOIyc1xBJhM17R8dZ3_C2QBmmjq_xHiG45Ode_uNV-eBgzEpMMqFsS801CqKIpjQYuVgxO6PAXHmO_QsGNVK77jTIn1cSSIuDegCKmVTzuQhapsVkdlhhvm1qlHbsG_wvp0xCArIn64zN_k8jQ2KxmHhRvfBoTNw8Sv-HQX3aNOh7TdSa20nHSr-Nx5bbfHGB3-qFb3YfYHFs71y-59p9LWGKR0W8K-kIBDWPrU2iutLymDM7aIvc-0o1A49-nTFuuILRGJpBB8owjUKVFDr-BJmigGlx1uxxLW9ZfqhWvq-ug4aEdyFnwcE2A6UIIXpbflSz_6vNlTfMN0OK-tC2Iz_NF9ISS8-GfMsDXRhx_cod4kJkOJugPibmFvsg0zJm5Q5FRnfs44TJOINnzaEwG7FZd_emyhZ7CL9OCLJWsGK-BRwQGIuLjXVJgJiT-TGK1uTAaH0W7n6i4BV84Rv-pO0CR0x8IGNDyf1II8untF8-lD66ZgYXNQr8xAe6GTvru04e1BQOD0P_Q4sfkTB7S9wiAyq-Huy5IuLb9yneNiFigU3PtaVsis52xifMKfqUNRb99WAKmL1K889KON55ozzCWd9Whs_JfwqMl1a9soKca4RptZSuvK0jU7Ml2j-u54SEzznpJA-Pv4MqBGl_V_DVM30vhp5wD3yGCLpddWZ3jlXYXAeLxHWNRJ0YdvOK0KnEJ_vWazDtoM"
  },
  {
    title: "Komedi",
    image: "https://yandex-images.clstorage.net/4i7tK2A81/02a8bauVAP/-WzDqeYpP1xHGlI4-QsjVW2t0CdmzQv26E7o1L-fcqWFCvrit09KG6WjowVijFmeT6qSY6UE2KrGJnG3bKJNXOw61eWtbSIIFF9NbPEIJldw8JM2epcPq_IMtNupwXir1wrAiJM-OyDdlI8hGPQRnRSrwX2-VNP0qB0yxhP_CxroS_Sd5T1QW3IHHhf3JDN7RMzyG2ilMaHbQYfnj5tA3aBr7ZSHNxsM2aG0ECXfOZ0igshr3VvP7I0vSvI1_iwJ20jahOIyc1xBJhM17R8dZ3_C2QBmmjq_xHiG45Ode_uNV-eBgzEpMMqFsS801CqKIpjQYuVgxO6PAXHmO_QsGNVK77jTIn1cSSIuDegCKmVTzuQhapsVkdlhhvm1qlHbsG_wvp0xCArIn64zN_k8jQ2KxmHhRvfBoTNw8Sv-HQX3aNOh7TdSa20nHSr-Nx5bbfHGB3-qFb3YfYHFs71y-59p9LWGKR0W8K-kIBDWPrU2iutLymDM7aIvc-0o1A49-nTFuuILRGJpBB8owjUKVFDr-BJmigGlx1uxxLW9ZfqhWvq-ug4aEdyFnwcE2A6UIIXpbflSz_6vNlTfMN0OK-tC2Iz_NF9ISS8-GfMsDXRhx_cod4kJkOJugPibmFvsg0zJm5Q5FRnfs44TJOINnzaEwG7FZd_emyhZ7CL9OCLJWsGK-BRwQGIuLjXVJgJiT-TGK1uTAaH0W7n6i4BV84Rv-pO0CR0x8IGNDyf1II8untF8-lD66ZgYXNQr8xAe6GTvru04e1BQOD0P_Q4sfkTB7S9wiAyq-Huy5IuLb9yneNiFigU3PtaVsis52xifMKfqUNRb99WAKmL1K889KON55ozzCWd9Whs_JfwqMl1a9soKca4RptZSuvK0jU7Ml2j-u54SEzznpJA-Pv4MqBGl_V_DVM30vhp5wD3yGCLpddWZ3jlXYXAeLxHWNRJ0YdvOK0KnEJ_vWazDtoM"

  },
  {
    title: "Korku",
    image: "https://avatars.mds.yandex.net/i?id=3a045920c878d8103c29168cd2b29697-5490649-images-thumbs&n=13"

  },
  {
    title: "Macera",
    image: "https://avatars.mds.yandex.net/i?id=4eaaecaac705ea47e27c47278d476cb0e988581d-9712020-images-thumbs&n=13"
  },
  {
    title: "Polisiye",
    image: "https://yandex-images.clstorage.net/Rra9G5407/abcbc88m1Ytz/dR1Ai6iFMhulTaowvetdL025GwNZf9eJqbYW8UmMCVt6sb8hm2SnRQtEOizx1V9OdXup9Y_SR21clLHOpyDfAwFZhL-ZAHcPxLlO8M17HNv8bZsHKLr3ONgGRgUMWdzbKhJZhqzmkaLt481uRkHKK-AeiEF_p7f7yvDj6PMFiNA3HDPb7tUS-oO-iLKum1wpHbrZB0ipdHsc9QWUGHopvC2z-yefV8CALoOevrRyO2ohPOnknqY0aqlEcdty9voBx9_wKR738yuiDzsRzjteaJxJKpbq-7QLLOVGJBv7ey1_gSrmbGXTYq6TvBykInjKMt3b149XBnjYpEKqggcokzfcY_q-JSJ6YfyoEA1orgt-eWpXeQikmM6GBuWKSnsdL9N5N59WUgLvQn6N9hEYWTPfyeVu56RoW5TSmuNFKyAFDWMIj0dSiaG-G6NOmK8pz4k7J4io9duuNKY0ecmYnh4h6MQMBoFyboD8nrWiaziDbrlEn2RmOJhnQcryhymR9j9iOvzU8SqBLgkg3bic238ZesbYSEQ6jBQ1xlkaW97_0rjmruWBQk7hT1304sgJM15pVJ6np3sZRbM5YNdIA0RtksodxrNKgg0YY87KHvvcKQsFivq2K_83BJd5WVtNbqE75S41MBLv0Q5uh9CqS6JNiEQ_95S6qxbBSbO3exBXXQNq_DbzC9Odu0H92bwZvyrYN2lpd6iMRWQm-ckZ3A9CuQfsJdKSjfN8fGWwuzmAris1DzV2Wzt0QAljRoghJN-guBwks_swPxlCn2odK804G8XrWjXorgaGlGsJmE9PoLhVLeYCgkwR3lwX01rLoB94tx2HlclZlCHpo4cJMPQeARhdBzCLw-5K8vzaXJsdChplaOhWaazURgd5GStPXzGalJwHMxOf0F_v1fNYumMd6oXPVDRaeGSjyaNFugMW_mAI3VRwqGPdSkI9GB2KjQjKxDk7dCrsdxW0o"
  },
  {
    title: "Romantik",
    image: "https://avatars.mds.yandex.net/i?id=821a05fe5d7a73339a5d65e4a89aaf60-5518637-images-thumbs&n=13"
  },
  {
    title: "Savaş",
    image: "https://avatars.mds.yandex.net/i?id=11e6852aa2ca8ce711e6bbcc0d860181e2d7b0cc-10093903-images-thumbs&n=13"
  },
  {
    title: "Spor",
    image: "https://avatars.mds.yandex.net/i?id=f3fbb3409ba237cc79b78e93b90536c24518471f-8564995-images-thumbs&n=13"

  },
  {
    title: "Tarih",
    image: "https://avatars.mds.yandex.net/i?id=2456b68dbe3c11efb9864b881835ae1d58fad468-10697157-images-thumbs&n=13"
  }
];

export default function Category() {
  return (
    <>
      <Header />
      <div className="container category-container bg-margin">
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-6 col-md-3 d-flex justify-content-center">
              <Link to={`/${category.title.replace(/\s+/g, '_').toLowerCase()}`}>
                <div className="card bg-dark text-white category-card">
                  <img src={category.image} className="card-img category-image" alt={`Category ${category.title}`} />
                  <h5 className="category-title">{category.title}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
