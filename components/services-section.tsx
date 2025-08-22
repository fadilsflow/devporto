import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function ServicesSection() {
    const whatsappNumber = "6285157739978"; // Ganti dengan nomor WhatsApp Anda
    const defaultMessage = "Halo, saya tertarik dengan layanan pembuatan web app Anda. Bisa berinformasi lebih detail?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;


    return (
        <section >
            <div >
             

                <div className="mt-4 grid gap-6 md:grid-cols-3">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Paket UMKM</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Rp 1.000.000</span>
                            <CardDescription className="text-sm">Rekomendasi untuk UMKM yang ingin mengoptimalkan produknya dengan catalog lengkap</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    '3 Halaman Website',
                                    'Free Domain .com',
                                    'Aktif 1 Tahun',
                                    'Basic Landing Page Design',
                                    'Basic Copy Writing',
                                    'Akses Dashboard Website',
                                    'Tombol WhatsApp',
                                    'Gallery Produk',
                                    'Integrasi Sosial Media'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                                                <Link href={whatsappUrl} target="_blank">Pesan Sekarang</Link>

                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Rekomendasi</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Paket Bisnis</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">Rp. 4.525.000</span>
                                <CardDescription className="text-sm">Cocok untuk Profile Bisnis, Portal Berita, Sekolah/Yayasan, Portofolio</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {[
                                        '30+ Halaman Website',
                                        'Free Domain (.com/.id/.org)',
                                        'Dedicated Hosting',
                                        'Aktif 1 Tahun',
                                        'Custom Web Design',
                                        'Free Logo Design',
                                        'Advanced Copy Writing',
                                        'Live Chat Integration',
                                        'Multi Bahasa',
                                        'Akses Panel Hosting',
                                        'Analytic Traffic',
                                        'SEO Optimization',
                                        'Setting 5 Email Domain',
                                        '6 Article/Blog',
                                        'Google Maps Integration'
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className='mt-3'>
                                <Button
                                    asChild
                                    className="w-full">
                                                                    <Link href={whatsappUrl} target="_blank">Pesan Sekarang</Link>

                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Paket Custom</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Custom Price</span>
                            <CardDescription className="text-sm">Solusi khusus dengan fitur sesuai kebutuhan</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Semua Fitur Paket Bisnis High',
                                    'Free Domain (.com/.id/.org)',
                                    'Dedicated Hosting',
                                    'Aktif 1 Tahun',
                                    'LMS/Online Class',
                                    'Donation Website',
                                    'Hotel Booking System',
                                    'Job Listing + Profile Builder',
                                    'Bookstore Website',
                                    'Appointment System',
                                    'Video Listing Website'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                                                <Link href={whatsappUrl} target="_blank">Pesan Sekarang</Link>

                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}