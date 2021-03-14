# RaloAPI

> 거,, Deno씨는,, 제육 좀 볶나?

## Description

RaloAPI는 랄뚜기들을 위한 짤 API 입니다.

랜덤한 짤을 리턴하며, 특정 문구를 지정해줄 시 그에 맞는 밈을 리턴합니다.

랜덤한 짤은 Python에 의해 알아서 수집됩니다.

Deno와 TypeScript로 제작되었습니다.

### Details

특정 문구라 함은, 랄로의 어룩입니다.

예시로, `/detail?v=미숙아느낌` 에 요쳥을 보내면,

"바론 어떻게 빨리 좀 못 나오나? 미숙아 느낌으로,,," 에 해당되는 밈을 리턴합니다.

| Value | Meme | URL |
|-------|------|-----|
| `/detail?v=불편해?` | "불편해? 불편하면 씨X 자세를 고쳐앉아,," | https://youtu.be/_-J-gDPQpNU?t=175 |
| `/detail?v=좋아상처` | "그러니까.. 누군가를 좋아한다는 (생략)" | https://youtu.be/OAyyTrRP_zM?t=15 |
| `/detail?v=안심도둑` | "아 안심하세요 도둑입니다" | https://youtu.be/OAyyTrRP_zM?t=362 |
| `/detail?v=gta` | "못생긴 X이 담배 피는거만큼 (생략)" | https://youtu.be/OAyyTrRP_zM?t=52 |

특정 밈 엔드포인트는 계속 추가하겠습니다.

## Endpoints

### `GET` /random

랄로의 랜덤 밈을 리턴합니다.

GIF, PNG 던 아무거나 리턴합니다.

### `GET` /detail?v=<랄로 어룩>

해당 어룩에 맞는 밈을 리턴합니다

## Contributing

Pull Request나 Issue를 만들어 주세요.
