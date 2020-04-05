import Page from './Page'
import Html from './Html'
import Title from './Title'
import Paragraph from './Paragraph'
import Heading from './Heading'
import List from './List'
import Image from './Image'
import Quote from './Quote'

const serializers = {
  'page': new Page(),
  'html': new Html(),
  'title': new Title(),
  'paragraph': new Paragraph(),
  'heading': new Heading(),
  'list': new List(),
  'image': new Image(),
  'quote': new Quote()
}

export function serialize (block) {
  console.log('serializing')
  return JSON.stringify(block)
  // const serializer = serializers[block.type]
  // return serializer.serialize(block)
}

export function deserialize (data) {
  const serializer = serializers[data.type]
  return serializer.deserialize(data)
}