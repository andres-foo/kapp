import sqlite from "better-sqlite3"
const db = sqlite("./src/db/kanjis.db")

const getKanjiByLiteral = (literal) => {
  const kanji = db.prepare("SELECT * FROM kanjis WHERE literal = ?").get(literal)

  if (!kanji) return null

  if (kanji.meanings) {
    kanji.meanings = kanji.meanings.replaceAll(";", ", ")
  }

  return kanji
}
export default getKanjiByLiteral
