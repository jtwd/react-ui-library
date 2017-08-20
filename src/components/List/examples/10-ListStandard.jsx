import React from 'react'

import List from '../List'

/** Standard & Ordered List */
export default function ListStandard() {
  const data = [
    { id: '1', 'articleTitle': 'List item number one', 'body': 'Adipisci aut corporis delectus dicta eveniet facere in obcaecati sint voluptates. Adipisci animi ducimus eos eum fuga maiores quasi veniam vero? Fugiat!'},
    { id: '2', 'articleTitle': 'Second List item', 'body': 'Accusantium ad amet aperiam at autem dolore eaque enim facilis harum, hic iure neque optio quia, recusandae reprehenderit repudiandae ut, vel voluptate.'},
    { id: '3', 'articleTitle': 'List item number three', 'body': 'Dolorem et incidunt iusto maiores minus nam, quasi quisquam voluptate. Aliquid quod, ratione? Aperiam cum delectus deleniti ducimus illum molestiae quisquam similique?'}
  ]
  return (
    <div>
      <List collection={data} titleKey="articleTitle" />
      <List collection={data} titleKey="articleTitle" ordered />
    </div>
  )
}
