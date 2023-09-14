import {
  useCallback,
  useEffect,
} from 'react'
import type { TextNode } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useLexicalTextEntity } from '@lexical/react/useLexicalTextEntity'
import {
  $createVariableValueBlockNode,
  VariableValueBlockNode,
} from './node'
import { getHashtagRegexString } from './utils'

const REGEX = new RegExp(getHashtagRegexString(), 'i')

const VariableValueBlock = () => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (!editor.hasNodes([VariableValueBlockNode]))
      throw new Error('VariableValueBlockPlugin: VariableValueNode not registered on editor')
  }, [editor])

  const createVariableValueBlockNode = useCallback((textNode: TextNode): VariableValueBlockNode => {
    return $createVariableValueBlockNode(textNode.getTextContent())
  }, [])

  const getVariableValueMatch = useCallback((text: string) => {
    const matchArr = REGEX.exec(text)

    if (matchArr === null)
      return null

    const hashtagLength = matchArr[5].length + 2
    const startOffset = matchArr.index + matchArr[1].length
    const endOffset = startOffset + hashtagLength + 2
    return {
      end: endOffset,
      start: startOffset,
    }
  }, [])

  useLexicalTextEntity<VariableValueBlockNode>(
    getVariableValueMatch,
    VariableValueBlockNode,
    createVariableValueBlockNode,
  )

  return null
}

export default VariableValueBlock
