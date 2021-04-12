import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Controller('')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) { }
    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") id: string) {
        return this.movieService.getOne(id);
    }

    @Post()
    create(@Body() movieData) {
        return this.movieService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') id: string) {
        return this.movieService.deleteOne(id);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() updateData) {
        return {
            updatedMovie: id,
            ...updateData
        }
    }


}