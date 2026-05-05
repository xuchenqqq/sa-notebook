---
outline: deep
---

# 知识地图

下面是软考系统分析师考试的核心知识结构，按模块归纳，方便快速查阅。

<script setup>
const modules = import.meta.glob('./knowledges/**/*.md', { eager: true })

const base = import.meta.env.BASE_URL || '/'

const grouped = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((path) => {
    const parts = path.split('/')
    const fileName = parts.pop()
    const dir = parts[parts.length - 1] || ''
    return {
      dir,
      name: fileName.replace(/\.md$/, ''),
      link: `${base}${path.replace(/^\.\//, '').replace(/\.md$/, '')}`
    }
  })
  .reduce((groups, item) => {
    let group = groups.find((g) => g.dir === item.dir)
    if (!group) {
      group = { dir: item.dir, items: [] }
      groups.push(group)
    }
    group.items.push({ name: item.name, link: item.link })
    return groups
  }, [])
</script>

<div>
  <div v-if="grouped.length">
    <section v-for="group in grouped" :key="group.dir">
      <h2>{{ group.dir }}</h2>
      <ul>
        <li v-for="item in group.items" :key="item.link">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </section>
  </div>
  <div v-else>
    暂无目录或文件，请检查 `docs/knowledges` 文件夹。
  </div>
</div>
