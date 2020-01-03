---
title: branch 관련 명령어
date: 2019-11-07 10:23:48
path: git-branch
tag: GIT
---

## Branch 관련 자주 쓰는 명령어 정리

`git branch` : branch 리스트 및 현재 브랜치 확인 가능
`git branch <브랜치명>` : 브랜치명으로 브랜치 생성
`git checkout <브랜치명>` : 브랜치명으로 브랜치 전환, commit 되지 않고 수정되거나 추가된 파일은 유지
`git checkout -b <브랜치명>` : 브랜치명으로 브랜치 생성과 동시에 브랜치 생성
`git branch -d <브랜치명>` : 브랜치 삭제

## 브랜치 합치기

### 바로 합치기

    git checkout development
    git merge <브랜치명>

-   merge 할 브랜치로 이동 후 브랜치 병합, 병합 한 후 push 해 준다.

### 커밋 합치기

`git merge`를 실행할 때 `--squash` 매개변수를 추가하면 `git merge`에서 지정한 브랜치의 모든 커밋을 하나의 커밋으로 밀어 넣는다.

    feature 브랜치에 commit이 3개 있다고 가정
    git checkout development
    git merge --squash contact

    git commit -m 'add feture commit'

feature 브랜치에 있는 3개의 커밋이 작업 디렉토리에 적용되어 스테이징 되었지만, 아직 커밋이 되지 않았으므로 커밋한다.

### 선택하여 합치기

브랜치 전체를 합치기 보다 하나의 커밋만 합치고 싶을 때, 전체 합치기가 적합하지 않을 경우
`git cherry-pick`을 사용하면 개별적인 커밋을 밀어 넣을 수 있다.

feature 브랜치에 commit을 하고
`git log`를 해 보면 커밋명을 알 수 있다 -> `f326e27`

development 브랜치로 체크아웃한 다음 `cherry-pick`명령어를 실행하여 추가된 커밋명을 선택해서 합칠 수 있다.

    git checkout development
    git cherry-pick f326e27 / git cherry-pick -n f326e27

기본적으로 `git cherry-pick`은 선택한 커밋의 변경 사항을 가지고 새로운 커밋을 생성한다.

선택하려는 커밋이 여러 개라면 `git cherry-pick`에 `-n` 매개변수를 지정한다. `-n` 매개변수는 Git을 합치기는 하지만 커밋하지 않게 만든다.

참고 : [참고](https://mylko72.gitbooks.io/git/content/branch/merge.html)
