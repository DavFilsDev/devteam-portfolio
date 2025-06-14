export default function Test() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        🎉 Frontend Ready!
      </h1>
      <div className="space-y-2">
        <p className="text-gray-700">
          Tailwind CSS is properly configured with:
        </p>
        <ul className="list-disc pl-5 text-green-600">
          <li>ESM module support</li>
          <li>PostCSS processing</li>
          <li>React component styling</li>
        </ul>
      </div>
    </div>
  )
}