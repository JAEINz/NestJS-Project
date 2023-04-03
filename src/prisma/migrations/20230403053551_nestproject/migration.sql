-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "content" VARCHAR(200) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);
