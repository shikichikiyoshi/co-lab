import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Globe, BarChart2, Users } from 'lucide-react'

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここにフォーム送信のロジックを追加
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">株式会社コラボ</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:underline">サービス</a></li>
              <li><a href="#about" className="hover:underline">会社概要</a></li>
              <li><a href="#contact" className="hover:underline">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">DXで企業の未来を創造する</h2>
            <p className="text-xl mb-8">ITコーディネーターとして、あなたのビジネスを次のレベルへ</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
              無料相談を予約する <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">サービス</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Globe className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">DX戦略立案</h3>
                <p>デジタル技術を活用し、ビジネスモデルの変革と競争力の強化を支援します。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BarChart2 className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">要件定義・設計</h3>
                <p>プロジェクトの成功に不可欠な要件を明確化し、最適なシステム設計を提案します。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">ITコンサルティング</h3>
                <p>経営戦略とITの融合を図り、企業の持続的な成長をサポートします。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">会社概要</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">株式会社コラボ</h3>
                <p className="mb-2">所在地: 〒870-0000 大分県大分市○○町1-2-3</p>
                <p className="mb-2">設立: 20XX年4月1日</p>
                <p className="mb-2">資本金: 1,000万円</p>
                <p>事業内容: DX戦略立案、ITコンサルティング、システム要件定義・設計</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">ミッション</h3>
                <p className="mb-4">
                  私たちは、最先端のテクノロジーと深い業界知識を組み合わせ、
                  クライアントのビジネスに革新的なソリューションを提供します。
                  デジタル変革を通じて、企業の成長と社会の発展に貢献することが我々の使命です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
              {formSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">送信完了</h3>
                  <p>お問い合わせありがとうございます。担当者より速やかにご連絡いたします。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容</label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">送信する</Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 株式会社コラボ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}