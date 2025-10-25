import getKanjiByLiteral from "./queries/getKanjiByLiteral.js"

const home = (req, res) => {
  res.send("todo")
}

const kanji = (req, res) => {
  const literal = req.params.literal
  const kanji = getKanjiByLiteral(literal)
  if (kanji === null) return res.send("error")

  res.render("kanji", { kanji })
}

const search = (req, res) => {
  res.send("todo")
}

const myList = (req, res) => {
  res.send("todo")
}

const otherLists = (req, res) => {
  res.send("todo")
}

const components = (req, res) => {
  res.send("todo")
}

export default {
  home,
  kanji,
  search,
  myList,
  otherLists,
  components,
}
