export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 pt-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Hi, </h1>
          <h1 className="text-3xl font-bold text-red-600 md:text-4xl">Saya Husein</h1>
          <h1 className="text-2xl font-medium text-gray-600 md:text-3xl">Web Designer</h1>
          <div className="mt-10">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">Mulai</button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-20 mt-20">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Saya</h2>
          <p className="text-lg text-gray-600">Halo! Nama saya Sayyid Husein, mahasiswa jurusan Informatika di Politeknik LP3I. Saya memiliki ketertarikan yang mendalam dalam dunia teknologi dan pemrograman. Selama studi saya, saya telah mengembangkan keterampilan dalam berbagai bahasa pemrograman dan alat pengembangan perangkat lunak.

Saya percaya bahwa teknologi memiliki potensi untuk mengubah cara kita hidup dan bekerja.</p>
        </div>
      </div>
      <div className="bg-white py-20 mt-20">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Portofolio</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <img src="project1.jpg" alt="Project 1" className="w-full h-64 object-cover" />
              <h3 className="text-lg font-bold text-gray-900 mt-4">Project 1</h3>
              <p className="text-lg text-gray-600">Project belum tersedia.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <img src="project2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
              <h3 className="text-lg font-bold text-gray-900 mt-4">Project 2</h3>
              <p className="text-lg text-gray-600">Project bellum tersedia.</p>
            </div>
            {/* Tambahkan lebih banyak item portofolio di sini */}
          </div>
        </div>
      </div>
    </>
  );
}